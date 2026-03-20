# Developer Quick Reference Card

## Essential Commands
- `npm install`: Install dependencies
- `npm run build`: Build the project
- `npm start`: Start the application

## Project Structure
```
project-root/
├── src/
│   ├── components/
│   ├── pages/
│   └── utils/
├── public/
├── styles/
└── tests/
```

## Common Development Tasks
- Adding a new component: Create a new file in `src/components/`
- Updating styles: Modify files in `styles/`
- Writing tests: Place tests in the `tests/` directory

## API Authentication
Use JWT tokens for authentication. Include the token in the `Authorization` header as follows:
```
authorization: Bearer <token>
```

## Styling Guide
- Use BEM methodology for class names
- Follow the color palette defined in `styles/colors.css`

## Debugging Tips
1. Use console.log for basic debugging.
2. Leverage browser developer tools for inspecting elements and network requests.

## Database Queries
- Retrieving all users:
```sql
SELECT * FROM users;
```

## Testing Examples
- Unit tests: Use Jest framework. Example test for a component:
```javascript
import MyComponent from './MyComponent';

test('renders correctly', () => {
  // test details here
});
```

## Performance Tips
- Avoid unnecessary re-renders by using `React.memo` or `useMemo`.
- Optimize images and assets.

## Git Workflow
1. Create a new feature branch: `git checkout -b feature-branch`
2. Commit changes: `git commit -m "Add new feature"`
3. Push to remote: `git push origin feature-branch`
4. Create a pull request.

## Troubleshooting Information
- Check console for errors and warnings.
- Ensure all dependencies are properly installed using `npm install`. 
- Restart the development server if changes do not reflect.
