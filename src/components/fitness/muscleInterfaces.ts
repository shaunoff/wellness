export interface IMuscleType {
  type: 'primary' | 'secondary'
  muscle: IMuscle
}

export interface IMusclesData {
  muscle: IMuscle[]
}

export interface IMuscle {
  id: string
  name: string
  label: string
}
