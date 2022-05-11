import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]
}