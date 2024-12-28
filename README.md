# Toothless

A modern, type-safe Discord bot built with TypeScript, focusing on server management and logging capabilities.

## Features

- **Advanced Logging System**: Comprehensive logging of server events including:
  - Message edits and deletions
  - Channel changes
  - Role modifications
  - Member activities
  - Voice state updates
  - Thread management
  - Invite tracking
  - Incident reporting

- **Command Systems**:
  - Support for both text commands and application (slash) commands
  - Built-in cooldown management
  - Admin evaluation capabilities

- **Internationalization**:
  - Multi-language support using i18next
  - Language preference management per user

- **Modern Architecture**:
  - Built with TypeScript for type safety
  - Uses Discord.js for reliable Discord API interaction
  - PostgreSQL database with Prisma ORM
  - Hono for API endpoints
  - Sentry for error tracking
  - DataDog metrics integration

## Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- pnpm package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/toothless.git
cd toothless
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration.

4. Set up the database:
```bash
pnpm prisma generate
pnpm prisma db push
```

## Development

- Build and run in development mode:
```bash
pnpm build
```

- Start in production mode:
```bash
pnpm start
```

## Project Structure

- `/src`: Main source code
  - `/bot`: Bot-related code
    - `/applicationCommands`: Slash commands
    - `/textCommands`: Traditional text commands
    - `/events`: Discord event handlers
    - `/autoCompletes`: Autocomplete handlers
  - `/lib`: Shared utilities and helpers
- `/prisma`: Database schema and migrations
- `/languages`: Internationalization files
- `/config`: Configuration files
- `/typings`: TypeScript type definitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
