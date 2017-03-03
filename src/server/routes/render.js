import Path from 'path';

import _ from 'lodash';

import Cache from '../../cache';
import logger from '../../logger';

export default function render(compilers) {
    const cache = new Cache();

    return async function(req, res) {
        let path = Path.join(process.cwd(), req.path);
        let options = _.pick(req, ['platform']);

        let comp = _.find(compilers, c => c.test.test(path));

        if (comp) {
            try {
                let { compiler } = comp;
                let { body, mime } = await cache.cached(compiler)(options, path);
                res.type(mime).send(body);
            } catch (err) {
                res.status(500).send(`Error: ${err.message}`);
                logger.error(err);

                if (err.codeFrame) {
                    logger.error(err.codeFrame);
                }

                if (err.filename) {
                    logger.error(`in ${err.filename} (${err.line}:${err.column})`);
                }

                throw err;
            }
        } else {
            res.sendFile(path);
        }
    };
}