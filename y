version = 0.1
[y]
[y.deploy]
[y.deploy.parameters]
stack_name = "sam-app"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-1g22i2cs7ttso"
s3_prefix = "sam-app"
region = "us-east-1"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"

[default]
[default.deploy]
[default.deploy.parameters]
stack_name = "sam-app"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-1g22i2cs7ttso"
s3_prefix = "sam-app"
region = "us-east-1"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"
