# EKS kubectl

## Deploy applications

```
cd hello-frontend
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml

## Interacting with kubectl

```
# Show deployments
kubectl get deployments

# Get deployment
kubectl get deployment ekshello-frontend

# Show services
kubectl get services

# Get service
kubectl get service ekshello-frontend

# Get service with wide output
kubectl get service ekshello-frontend -o wide
```

## Scale pods

```
# Scale deployment
kubectl scale deployment ekshello-frontend --replicas=3

# Verify
kubectl get deployments
```

## Cleanup

```
cd hello-frontend
kubectl delete -f kubernetes/service.yaml
kubectl delete -f kubernetes/deployment.yaml
```