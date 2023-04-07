import { Form, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { search } from '../../redux/actions';
import "./styles.css";
import { HiMagnifyingGlass } from 'react-icons/hi2'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(search(searchValue))
    setSearchValue("")
  }
  return (
    <Form onSubmit={handleSubmit} className="Form mt-5">
      <InputGroup className="mb-3 rounded-start">
        <Form.Control
          className='form-control'
          placeholder="Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(
              e.target.value,
            );
          }}
        />
        <Button type="submit" className="btn d-none d-md-block">
          <HiMagnifyingGlass size={24} />
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBar;