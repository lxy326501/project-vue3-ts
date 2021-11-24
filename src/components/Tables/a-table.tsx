import { h,defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },{
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园2号',
            },{
                key: '3',
                name: '胡彦任',
                age: 42,
                address: '西湖区湖底公园3号',
            },{
                key: '4',
                name: '胡彦庆',
                age: 42,
                address: '西湖区湖底公园3号',
            },
        ] as Array<Object>
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
        ] as Array<Object>
        return () => h(
            <a-table dataSource={dataSource} columns={columns} />
        )
    }
});