import { Button, Select, Spinner } from "components";
import { Input } from "components";
import { StateEnum } from "enums";
import { Form, Field } from "react-final-form";
import { Task } from "types";
import { stateOptions } from "_constants";
import { ReactNode } from "react";
import { Modal } from "./Modal";
import { useTask } from "hooks";
type TaskModalProps = {
  initialValues?: Task;
  renderButton: (c: () => void) => ReactNode;
};
export const TaskModalForm = ({
  initialValues,
  renderButton,
}: TaskModalProps) => {
  const hasEdit = !!initialValues;
  const { onSubmit, loading, showModal, handleModal, remove } = useTask({
    task: initialValues as Task,
  });

  const renderButtons = () => {
    if (loading) {
      return <Spinner />;
    }
    return (
      <>
        <Button className="button-primary">Save</Button>
        {hasEdit && (
          <Button className="button-secondary" type="button" onClick={remove}>
            Delete task
          </Button>
        )}
      </>
    );
  };

  return (
    <>
      {renderButton(handleModal)}
      <Modal showModal={showModal} onClose={handleModal}>
        <div className="flex flex-col flex-1">
          <Form
            onSubmit={onSubmit}
            initialValues={{
              title: "",
              state: StateEnum.todo,
              ...initialValues,
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                <span className="title-secondary mb-4">Create a new task</span>
                <Input
                  name="title"
                  title="Title"
                  placeholder="Type the title"
                />

                <div className="mt-8 flex flex-col">
                  <div className="flex  items-center mb-2">
                    <span className="title text-sm ">State</span>
                  </div>
                  <Field
                    name="state"
                    render={({ input }) => (
                      <Select
                        options={stateOptions}
                        value={input.value}
                        onChange={input.onChange}
                      />
                    )}
                  />
                </div>
                <div className="max-w-xs mt-auto self-center gap-x-4 flex">
                  {renderButtons()}
                </div>
              </form>
            )}
          />
        </div>
      </Modal>
    </>
  );
};
