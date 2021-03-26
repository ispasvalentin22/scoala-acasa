import Teacher from '../../../models/teacherModel';
import { store } from '../redux/store';

const teacherName = store.getState().user.name;

export const gotClass = async () => {
  const teacher = await Teacher.findOne({ name: teacherName });
  return teacher.class == null ? false : true;
};
