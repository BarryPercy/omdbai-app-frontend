import { Form, InputGroup, Button, Alert, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { search } from '../../redux/actions';
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { RootState } from '../../redux/interfaces';
import { SET_ERROR } from '../../redux/actions';
import "./styles.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useAppDispatch();
  const error = useAppSelector((state: RootState) => state.movies.error); //gets an error if it exists from the state
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { //when a user presses enter or clicks the search button it will run this function
    event.preventDefault(); //prevents refresh
    if(searchValue===""){ //this prevents any API requests from happening if the user enters nothing.
        dispatch({
            type: SET_ERROR,
            payload:"Please enter a search term",
          })
    } else{
        dispatch(search(searchValue))
        setSearchValue("") //resets search value so that the search term doesn't stay there.
    } 
  }
  useEffect(()=>{ //resets error on page load
    dispatch({
        type: SET_ERROR,
        payload:"",
      })
  },[])
  return ( //Inputgroup updates the searchValue hook whenever something new is changed so when the form is submitted it submits the full search term. errors only show below when an error exists.
    <>
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
        {error!==""&&error!==undefined?<Row className="justify-content-center">
            <Col xs={12} sm={7} md={4} lg={3}>
                <Alert variant="danger" className="alert d-flex justify-content-center align-items-center">
                    {error}
                </Alert>
            </Col>
        </Row>:""}
        
    </>
  )
}

export default SearchBar;