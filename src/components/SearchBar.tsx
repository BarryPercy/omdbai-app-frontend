import { Form, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { search } from '../redux/actions';

const SearchBar = ()=>{
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useAppDispatch();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        dispatch(search(searchValue))
        setSearchValue("")
    }
    return(
        <Form onSubmit={handleSubmit} className="mt-5">
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search"
                    value = {searchValue}
                    onChange={(e) => {
                        setSearchValue(
                            e.target.value,
                        );
                    }}
                />
                <Button type="submit">Submit</Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBar