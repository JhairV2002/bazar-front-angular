export interface GenericResponseDTO<T> {
  code: number;
  loading: boolean;
  message: string;
  data: T;
  status: string;
}
