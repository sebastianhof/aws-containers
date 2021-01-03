# EKS Helm Charts

## Deploy applications

```
# Use the dry-run flag
helm install --debug --dry-run ekshello .

# Deploy applications
helm install ekshello .
```

## Get services,pods,deployments

```
kubectl get svc,po,deploy
```

## Update the application

```
# Helm upgrade 
helm upgrade ekshello .

# Get pods status
kubectl get pods

# Helm status
helm status ekshello

# Helm history
helm history ekshello
```

## Rollback 

```
# Helm history
helm history ekshello

# Rollback to 1st revision
helm rollback ekshellp 1

# Helm status
helm status ekshello

# Get pods status
kubectl get pods
```

## Cleanup

```
helm uninstall ekshello
```