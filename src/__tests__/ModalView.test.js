import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ModalFilter from '../components/ModalView';


describe('ModalFilter', () => {
  const onConfirm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly when visible is true', () => {
    const { getByTestId } = render(
      <ModalFilter visible={true} onConfirm={onConfirm} />
    );

    expect(getByTestId('modal-filter')).toBeTruthy();
  });

  it('does not render when visible is false', () => {
    const { queryByTestId } = render(
      <ModalFilter visible={false} onConfirm={onConfirm} />
    );

    expect(queryByTestId('modal-choose-filter')).toBeNull();
  });

  it('calls onConfirm with "incompleted" when "Todo Pending" is pressed', () => {
    const { getByText } = render(
      <ModalFilter visible={true} onConfirm={onConfirm} />
    );

    fireEvent.press(getByText('Todo Pending'));
    expect(onConfirm).toHaveBeenCalledWith('incompleted');
  });

  it('calls onConfirm with "completed" when "Todo Done" is pressed', () => {
    const { getByText } = render(
      <ModalFilter visible={true} onConfirm={onConfirm} />
    );

    fireEvent.press(getByText('Todo Done'));
    expect(onConfirm).toHaveBeenCalledWith('completed');
  });

  it('calls onConfirm with "all" when "All Todo" is pressed', () => {
    const { getByText } = render(
      <ModalFilter visible={true} onConfirm={onConfirm} />
    );

    fireEvent.press(getByText('All Todo'));
    expect(onConfirm).toHaveBeenCalledWith('all');
  });
});
