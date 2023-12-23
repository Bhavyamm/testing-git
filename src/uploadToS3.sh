#!/bin/bash

bucket_name="porter-configs"
region="ap-southeast-1" 
s3_uri="s3://${bucket_name}/staging/frontend-insurance/config.env"

aws s3 cp "config.env" "${s3_uri}" --region "${region}"