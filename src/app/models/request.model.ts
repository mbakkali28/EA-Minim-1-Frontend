import type { ListParams, PageInfo } from './page.model';
import type { DayOfWeek } from './workout.model';

export const REQUEST_TYPES = ['RESERVA', 'INSCRIPCION', 'PETICION', 'INCIDENCIA'] as const;
export type RequestType = (typeof REQUEST_TYPES)[number];

export const REQUEST_TYPE_LABELS: Record<RequestType, string> = {
  RESERVA: 'Reserva',
  INSCRIPCION: 'Inscripción',
  PETICION: 'Petición',
  INCIDENCIA: 'Incidencia',
};

// Estados por los que pasa una solicitud.
export const REQUEST_STATUSES = [
  'PENDING',
  'APPROVED',
  'REJECTED',
  'COMPLETED',
  'CANCELLED',
] as const;
export type RequestStatus = (typeof REQUEST_STATUSES)[number];

export const REQUEST_STATUS_LABELS: Record<RequestStatus, string> = {
  PENDING: 'Pendiente',
  APPROVED: 'Aprobada',
  REJECTED: 'Rechazada',
  COMPLETED: 'Completada',
  CANCELLED: 'Cancelada',
};

export interface RequestEvent {
  status: RequestStatus;
  comment?: string;
  at: string;
  by?: { _id: string; name: string };
  automatic: boolean;
  version: number;
}

export interface RequestWorkout {
  _id: string;
  name: string;
  dayOfWeek: DayOfWeek;
}

export interface RequestRequester {
  _id: string;
  name: string;
  email?: string;
}

export interface Request {
  _id: string;
  type: RequestType;
  subject: string;
  description?: string;
  preferredDate?: string | null;
  workout: RequestWorkout | null;
  requester: RequestRequester | null;
  status: RequestStatus;
  history: RequestEvent[];
  isDeleted?: boolean;
  deletedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface RequestInput {
  type: RequestType;
  subject: string;
  description?: string;
  preferredDate?: string;
  workout: string;
}

export type RequestUpdateInput = Partial<Omit<RequestInput, 'workout'>>;

export interface RequestStatusChange {
  status: RequestStatus;
  comment?: string;
}

export interface RequestListParams extends ListParams {
  status?: RequestStatus | '';
  type?: RequestType | '';
  workout?: string;
}

export interface RequestsPage {
  requests: Request[];
  pagination: PageInfo;
}
