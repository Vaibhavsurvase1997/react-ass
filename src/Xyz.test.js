it('should be enabled',()=>{
    const {getByTestId}=render(<Xyz />);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled')

})

it('increments counter' ,()=>{
    const {getByTestId}=render(<Xyz/>);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveAttribute('1');
})
it('decrement counter',()=>{
    const {getByTestId}=render(<Xyz/>);
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent('-1');
})