#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EcsCdkStack } from '../lib/ecs-cdk-stack';

const app = new cdk.App();
new EcsCdkStack(app, 'EcsCdkStack');
