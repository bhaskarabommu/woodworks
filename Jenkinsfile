pipeline {
  agent any

  stages {
    stage('Hello') {
      steps {
        echo "cloning git repo"
        // clone and then run deploy inside the project dir
        sh '''
          git clone https://github.com/bhaskarabommu/woodworks.git
          cd woodworks
          chmod +x deploy.sh || true
          ./deploy.sh
        '''
      }
    }
  }
}
