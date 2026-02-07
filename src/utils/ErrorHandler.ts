export class ErrorWithApi extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = "ErrorWithApi";
  }
}

export function handleError(error: unknown): void {
  if (error instanceof ErrorWithApi) {
    console.error(`ErrorWithApi: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error("An unknown error occurred.");
  }
}