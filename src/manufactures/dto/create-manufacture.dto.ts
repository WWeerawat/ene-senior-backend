import { ApiProperty } from '@nestjs/swagger';

export class CreateManufactureDto {
  @ApiProperty()
  workCode: string;

  @ApiProperty()
  referenceId: string;

  @ApiProperty()
  dateReceipt: Date;

  @ApiProperty()
  customer: string;

  @ApiProperty()
  deadline: Date;

  @ApiProperty()
  condition: string;

  @ApiProperty()
  mat: string;

  @ApiProperty()
  platingType: string;

  @ApiProperty()
  otherPro: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  amountBill: number;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  invenUpdate: number;

  @ApiProperty()
  workShift: string;

  @ApiProperty()
  jig: string;

  @ApiProperty()
  chub: string;

  @ApiProperty()
  productOrder: string;
}
