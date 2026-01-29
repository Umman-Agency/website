export type Children = {
  children: React.ReactNode;
}

export type DataCapture = (data: any) => void;

export type CapturableForm = ComponentType<{ onSubmit: DataCapture }>;