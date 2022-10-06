import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from 'testing/render';
import { faker } from '@faker-js/faker';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const textInputData = {
      inputId: faker.datatype.uuid(),
      label: faker.datatype.string(),
      onChange: jest.fn(),
      value: '',
    };
    render(
      <TextInput
        inputId={textInputData.inputId}
        label={textInputData.label}
        value={textInputData.value}
        onChange={textInputData.onChange}
      />,
    );
  });

  it('should trigger correctly event', () => {
    const onChangeMock = jest.fn();
    const textInputData = {
      inputId: faker.datatype.uuid(),
      onChange: onChangeMock,
      label: faker.datatype.string(),
      value: '',
      placeholder: faker.datatype.string(),
      description: faker.datatype.string(),
    };
    render(
      <TextInput
        inputId={textInputData.inputId}
        label={textInputData.label}
        value={textInputData.value}
        onChange={textInputData.onChange}
        placeholder={textInputData.placeholder}
        description={textInputData.description}
      />,
    );
    const input = screen.getByTestId(textInputData.inputId);
    fireEvent.change(input, { target: { value: 'TEST' } });
    fireEvent.blur(input);
    fireEvent.focus(input);
    expect(onChangeMock).toBeCalledTimes(1);
  });
});
