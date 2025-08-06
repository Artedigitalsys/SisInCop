# SisInCop - Sistema de Inventário e Controle de Pallets

## Overview
SisInCop is a comprehensive inventory and pallet control system for warehouse management. It functions as a full-stack web application, offering features such as user authentication, detailed inventory management, service order tracking, pallet destruction management, machine stoppage tracking with real-time dashboards, and extensive reporting. The project aims to streamline warehouse operations, enhance tracking capabilities, and provide granular control over pallet logistics.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
SisInCop employs a modern full-stack architecture. The frontend is built with React and TypeScript, leveraging Vite, Wouter for routing, TanStack Query for state management, React Hook Form with Zod for forms, and shadcn/ui with Tailwind CSS for styling. The backend uses Express.js with TypeScript, providing a RESTful API. Data persistence is handled by PostgreSQL with Drizzle ORM, and authentication is session-based with bcrypt for security. The system supports multi-role users (admin, operador, inventariante) and implements strict unit-specific data isolation, allowing each operational unit (RJ, GO, SP) to manage its own distinct data. Key architectural decisions include a dynamic configuration system for various entities, a robust permission management system with granular access control, optimized PDF generation for reports and labels, and real-time machine stoppage monitoring with dashboard capabilities featuring live period calculations updated every second.

## Recent Changes (August 2025)
- **Machine Stoppage Dashboard**: Implemented dedicated real-time dashboard for monitoring stopped machines with period calculations in HH:MM:SS format, updated every second using React state timers. Separated from general machine stoppage listing for better organization.
- **Data Corrections**: Fixed machine stoppage dates from 05/08/2025 to 04/08/2025 as requested.
- **Dashboard Organization**: Created distinct pages for machine stoppage management (/machine-stoppage) and monitoring (/machine-stoppage/dashboard) with proper navigation structure.

## External Dependencies
- **Frontend**: React 18, Radix UI primitives, shadcn/ui, TanStack React Query, React Hook Form, Zod, Tailwind CSS.
- **Backend**: Neon PostgreSQL, Drizzle ORM, bcrypt, express-session, Express.js.