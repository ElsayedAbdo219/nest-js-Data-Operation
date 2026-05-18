import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

    @Column()
  email:string;

    @Column()
  password:string;
 

  @Column("simple-array")
    hoppies: string[]

    @Column("simple-json")
    profile: { nickname: string }

}