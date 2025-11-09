import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('renders form inputs', () => {
  render(<BugForm refreshBugs={() => {}} />);
  expect(screen.getByPlaceholderText(/Bug title/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Description/i)).toBeInTheDocument();
});
