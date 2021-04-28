import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript'
import {Restaurant} from './Restaurant'

@Table({
  defaultScope: {
    attributes: {exclude: ["deletedAt"]}
  },
  paranoid: true,
  tableName: "chefs"
})

export class Chef extends Model<Chef> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string

  @HasMany(()=> Restaurant)
  restaurants!: Restaurant[]
}


