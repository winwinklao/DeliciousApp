import { EMAILS } from './types'

export const addemail=(email)=>(
    {
      type:EMAILS ,
      email:email,
      selected:false ,
    }
  );
  