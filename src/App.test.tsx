import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import useMovielist from "./hooks/useMovielist";

jest.mock('./hooks/useMovielist');

describe('<App />', () => {
  it('renders <App />', () => {
    ;(useMovielist as jest.Mock).mockReturnValue({
      movies: [
        {
          id: 105,
          overview: "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
          poster_path: "w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
          releaseDate: "1985-07-03",
          title: "Back to the Future",
          voteAverage: 8.313,
          voteCount: 18585
        }
      ],
      error: null,
    })
    
    const { getByTestId } = render(<App />);
    expect(getByTestId('searchbar')).toBeInTheDocument();
  });
})

