import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript'
import {Chef} from './Chef'

@Table({
  defaultScope: {
    attributes: {exclude: ["deletedAt"]}
  },
  paranoid: true,
  tableName: "restaurants"
})

export class Restaurant extends Model<Restaurant> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED
  })
  @ForeignKey(()=> Chef)
  chefId!: string

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string

  @BelongsTo(()=> Chef)
  chef!: Chef
}
