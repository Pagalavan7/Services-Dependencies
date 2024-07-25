export class LoggerService {
  logMessage(name: string, status: string) {
    console.log(
      `The user with username ${name} with status ${status} is added`
    );
  }
}
