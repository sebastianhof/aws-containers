import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';

export class EcsCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'ECSVPC', {
      cidr: '10.0.0.0/24'
    });

    // Create an ECS cluster
    const cluster = new ecs.Cluster(this, 'ECSCluster', {
      vpc,
    });

    // Add service discovery namespace to cluster
    cluster.addDefaultCloudMapNamespace({ name: 'service'});

    // Add capacity to it
    cluster.addCapacity('DefaultAutoScalingGroupCapacity', {
      instanceType: new ec2.InstanceType("t2.micro"),
      desiredCapacity: 3,
      machineImageType: ecs.MachineImageType.BOTTLEROCKET
    });

    // TODO add security groups
}
}
