interface instanceDataType {
  id?: number
  instance_id: string
  instance_name: string
  instance_url: string
  instance_port: number
  auth_username: string
  auth_password: string
  instance_status: string
  tag: string
  description: string
}

export type { instanceDataType }
