# Amazon Elastic Container Service (ECS) Walkthrough

## Prerequisites 

- Node.js
- Homebrew


```
# Install jq
brew install jq

# Install copilot-cli
brew install aws/tap/copilot-cli

# Install cdk 
npm install -g --force aws-cdk
```

## copilot Path

### 1. Create ECS Environment

Copilot will create environment as part of the application creation process. No steps required here

### 2. Deploy applications

```
cd hello-backend
copilot init

- Application name: ecshello
- Service type: Backend Service
- Service name: ecshello-backend
- Dockerfile: ./Dockerfile

cd hello-frontend
npm install
npm run build
copilot init

- Application name: ecshello
- Service type: Load Balanced Web Service
- Service name: ecshello-frontend
- Dockerfile: ./Dockerfile
- No for test environemnt
```

copilot env init --name test --profile <profile> --app ecshello
copilot svc deploy --name ecshello-frontend --env test

### 3. Interacting with app/env/svc

```
# Show apps
copilot app ls

# Show ecshello application
copilot app show ecshello

# Show env
copilot env ls

# Show test environment
copilot env show -n test

# Show service status
copilot svc status -n ecshello-backend
copilot svc status -n ecshello-frontend

# Show logs
copilot svc logs -a ecshello -n ecshello-frontend --follow
copilot svc logs -a ecshello -n ecshello-backend --follow
```

### 4. Scale tasks

1. In `manifest.yml` change count:

```
# Number of tasks that should be running in your service.
count: 3
```

2. Deploy

```
copilot svc deploy
```

3. Verify

```
copilot svc status -n ecshello-<backend|frontend>
```

### 5. Clean up

```
copilot app delete 
```


## CDK path

### 1. Create ECS Environment

```
cd ecs-cdk

# synthesize cdk to cloud formation template 
cdk synth

# deploy 
cdk deploy
```


