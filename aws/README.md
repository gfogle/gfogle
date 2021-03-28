# AWS Cloud-Native Monorepo
This project is a sample monorepo that uses AWS native services to attempt a globally-scalable application out of the box.

### DynamoDB
Right now DynamoDB is the only database service AWS offers that is out of the box a multi-region, active-active database. Aurora has _some_ of the functionality but the primary databases must exist in the same region unlike DynamoDB GlobalTable.
