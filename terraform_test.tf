provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "test-terrform" {
  ami                    = "ami-0c50b6f7dc3701ddd"
  instance_type          = "t2.micro"
  availability_zone      = "ap-south-1a"
  key_name               = "webserver"
  vpc_security_group_ids = ["sg-0bda1ca6de971a08f"]
  tags = {
    Name    = "test-terraform"
  }
}