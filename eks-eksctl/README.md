# EKS with eksctl

[eksctl Documentation](https://eksctl.io/)

## Create EKS Environment

```
eksctl create cluster -f cluster.yaml
```

## Apply Fargate Profile

```
eksctl create fargateprofile -f fargate.yaml
```

