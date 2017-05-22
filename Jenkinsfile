#!groovy

node {
  try {
    // Checkout the proper revision into the workspace.
    stage('checkout') {
      checkout scm
    }

    env.AWS_DEFAULT_REGION = 'us-east-1'
    env.RF_DOCS_BUCKET = 'rasterfoundry-staging-docs-site-us-east-1'

    // Use the production docs bucket for releases.
    if (env.BRANCH_NAME.startsWith('release/')) {
      env.RF_DOCS_BUCKET = 'rasterfoundry-production-docs-site-us-east-1'
    }
    // Execute `cibuild` wrapped within a plugin that translates
    // ANSI color codes to something that renders inside the Jenkins
    // console.
    stage('cibuild') {
      wrap([$class: 'AnsiColorBuildWrapper']) {
        sh 'scripts/cibuild'
      }
    }

    if (env.BRANCH_NAME == 'develop' || env.BRANCH_NAME.startsWith('release/')) {

      // Publish asset bundle built and tested during `cibuild`
      // to the website S3 bucket.
      stage('cipublish') {
          wrap([$class: 'AnsiColorBuildWrapper']) {
            sh './scripts/cipublish'
          }
      }
    }
  } catch (err) {
    // Some exception was raised in the `try` block above. Assemble
    // an appropirate error message for Slack.
    def slackMessage = ":jenkins-angry: *raster-foundry-docs (${env.BRANCH_NAME}) #${env.BUILD_NUMBER}*"
    if (env.CHANGE_TITLE) {
      slackMessage += "\n${env.CHANGE_TITLE} - ${env.CHANGE_AUTHOR}"
    }
    slackMessage += "\n<${env.BUILD_URL}|View Build>"
    slackSend color: 'danger', message: slackMessage

    // Re-raise the exception so that the failure is propagated to
    // Jenkins.
    throw err
  } finally {
    // Pass or fail, ensure that the services and networks
    // created by Docker Compose are torn down.
    sh 'docker-compose down -v'
  }
}
