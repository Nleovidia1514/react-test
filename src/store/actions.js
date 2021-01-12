export const FETCH_FACT = 'FETCH_FACT';
export const fetchFactAction = () => ({
    type: FETCH_FACT
});

export const FETCH_FACT_SUCCESS = 'FETCH_FACT_SUCCESS';
export const fetchFactSuccessAction = (fact) => ({
    type: FETCH_FACT_SUCCESS,
    payload: fact
});