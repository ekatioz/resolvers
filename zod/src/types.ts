import { FieldValues, Resolver } from 'react-hook-form';
import { ZodTypeDef, z } from 'zod';

export type ZodResolver = <
  OutputFieldValues extends FieldValues,
  Def extends ZodTypeDef,
  InputFieldValues extends FieldValues,
>(
  schema: z.Schema<OutputFieldValues, Def, InputFieldValues>,
  schemaOptions?: Partial<z.ParseParams>,
  factoryOptions?: {
    /**
     * @default async
     */
    mode?: 'async' | 'sync';
    /**
     * Return the raw input values rather than the parsed values.
     * @default false
     */
    raw?: boolean;
  },
) => Resolver<z.infer<typeof schema>>;
