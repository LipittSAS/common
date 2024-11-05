import { StreamState } from "./stream-state.enum";

export interface Stream {
  id: string;
  name: string;
  description?: string;
  state: StreamState;
  start_date?: Date;
  end_date?: Date;
  stream_group_id: string;
}