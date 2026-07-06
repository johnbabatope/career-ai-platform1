# Architecture

## Monorepo

The repository is organized around applications, services, shared packages, infrastructure, and documentation.

## Core Applications

- Customer web portal
- API service
- Recruiter portal
- Employer portal
- Admin portal

## Core Services

- Job intelligence
- Matching
- Resume optimization
- Career coaching
- Notifications
- Audit

## Data Stores

- PostgreSQL for primary transactional data
- Redis for cache and queues

## Development Principle

Every module will be built incrementally with clear contracts and tests.
