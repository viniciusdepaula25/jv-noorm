export interface VeiculoDTO {
  id: string
  nome: string
  modelo: string
  fabricante: string
  ano: number
  created_at: Date
  updated_at?: Date
  deleted_at?: string
}
