

export class  NestFactoryStatic{
    public async create() {
        console.log('create')
    }
}
export const NestFactory = new NestFactoryStatic()
