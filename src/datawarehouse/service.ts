import {BigQuery} from "@google-cloud/bigquery";

export const getTransactions = async (DAOs: string[]) => {
    const bigQueryClient = new BigQuery({
        projectId: process.env.GOOGLE_PROJECT_ID,
        credentials: {
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            project_id: process.env.GOOGLE_PROJECT_ID,
            private_key: process.env?.GOOGLE_PRIVATE_KEY?.replace(new RegExp('\\\\n', 'g'), '\n')
        }
    })
    const sqlQuery = `SELECT * FROM \`karpatkey-data-warehouse.transaction_decoding.dm_wallet_transactions\`

                                ORDER BY transaction_id DESC LIMIT 500`;

    let rows = []

    try {
        const options = {
            query: sqlQuery,
        };

        const results = await bigQueryClient.query(options)
        rows = results[0];
    } catch (error) {
        console.error(error);
    }


    return rows.length > 0 ? mapRawDataToDatabase(rows): []
}

export const mapRawDataToDatabase = (rows: any[]) => {
    const results = rows.map((row: any) => {
        return {
            "id": row['transaction_id'] || null,
            "blockchain": row['Blockchain'] || null,
            "date_time": new Date(row['aud_ins_dttm']?.value) || null,
            "tx_hash": row['transaction_hash'] || null,
            "address_from": row['address_from'] || null,
            "direction": row['direction'] || null,
            "address_to": row['address_to'] || null,
            "token_symbol": row['token_symbol'] || null,
            "token_address": row['token_address'] || null,
            "token_amount": row['token_amount'] || null,
            "amount_in_usd": row['amount_usd'] || null,
            "tx_type": row['tx_type'] || null,
            "protocol_from": "",
            "position_from": "",
            "protocol_to": "",
            "position_to": "",
            "token_price": row['token_price'] || null,
            "block": row['Block'] || null,
            "edit_status": "not edited",
            "dao": row['DAO'] || null,
            "address": row['Address'] || null,
        }
        // token_type: 'elementary_asset',
        // block_timestamp: BigQueryTimestamp { value: '2020-10-25T19:51:21.000Z' },
    })

    return results
}
