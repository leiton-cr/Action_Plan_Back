import { PlanDetail } from "./DetailModel"

export interface PlanModel {
    id: string
    project: string
    manager: string
    company: string
    outcome?: string
    goal?: string
    issue?: string
    details?: Array<PlanDetail>
    updatedAt: string
}