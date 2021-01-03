# ECS with Copilot CLI

[Copilot CLI Documentation](https://aws.github.io/copilot-cli/)

## 1. Create ECS Environment

Copilot will create environment as part of the application creation process. No steps required here

## 2. Deploy applications

### Deploy frontend service

```
cd hello-frontend
npm install
npm run build
copilot init

- Application name: ecshello
- Service type: Load Balanced Web Service
- Service name: ecshello-frontend
- Dockerfile: ./Dockerfile
- Select No for test environment


copilot env init --name test --profile <profile> --app ecshello
copilot svc deploy --name ecshello-frontend --env test
```

### Deploy backend service

> TBD

<!-- ```
cd hello-backend
copilot init

- Application name: ecshello
- Service type: Backend Service
- Service name: ecshello-backend
- Dockerfile: ./Dockerfile
``` -->

## 3. Interacting with app/env/svc

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


