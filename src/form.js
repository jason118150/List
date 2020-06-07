import React, { useState, useEffect } from 'react';
import { PaginatedList } from 'react-paginated-list';
import { Link } from 'react-router';
import './css/form.css';
import { PaginatedListContainer, ControlContainer, ControlItem, StyledList, ListAvatar } from './styled-components';


const Form = () => {
    const [state, setState] = useState();
    const [isLoading, setisLoading] = useState(true);
    const [totalnumber, settotalnumber] = useState(0);
    const onPageChange = (items, currentPage) => {
        console.log('items are ', items);
        console.log('index is ', currentPage);
    };
    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then(response => response.json())
            .then(response => {
                setState(response);
                setisLoading(false);
                console.log(response);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            { isLoading === true ? 
                <p>I'm Loading...</p> :
                <div>
                    <PaginatedList
                        list={state}
                        currentPage={1}          
                        itemsPerPage={20}
                        displayRange={2}
                        leftMargin={1}
                        rightMargin={1}          
                        onPageChange={onPageChange}
                        controlClass={'pagination-control'}
                        PaginatedListContainer={PaginatedListContainer}
                        ControlContainer={ControlContainer}
                        ControlItem={ControlItem}
                        breakText={'...'}
                        breakClass={'pagination-break'}
                        nextText="Next"
                        prevText="Prev"
                        renderList={(list) => (
                        <StyledList>
                            <li>
                                <span>Avatar</span>
                                <span className="form_rightborder">Login</span>
                                <span>Site Admin</span>
                            </li>
                            {list.map((item, id) => {
                            settotalnumber(id);
                            return (
                                <li key={id}>
                                <span className="form_rightborder">
                                    <Link to={{ 
                                        pathname: `/${item.login}`, 
                                    }}>
                                        <ListAvatar img={item.avatar_url} />
                                    </Link>
                                </span>
                                <span className="form_rightborder">{item.login}</span>
                                <span>{item.site_admin ? 'true' : 'false'}</span>
                                </li>
                            );
                            })}
                        </StyledList>
                        )}
                    />
                    <span className="form_totalnumber">共 { totalnumber+1 } 筆</span>
                </div>
            }
        </div>  
    );
}
export default Form;
