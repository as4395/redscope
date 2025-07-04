import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

interface NmapPort {
  port: number;
  state: string;
  service: string;
}

interface NmapHost {
  address: string;
  ports: NmapPort[];
}

export async function runNmapScan(target: string, options: string[] = []): Promise<{ hosts: NmapHost[] }> {
  const args = ['-oX', '-', ...options, target];

  const { stdout } = await execFileAsync('nmap', args, { timeout: 20000 });
  return parseNmapXml(stdout);
}

function parseNmapXml(xml: string): { hosts: NmapHost[] } {
  const hostBlock = xml.match(/<host>([\s\S]*?)<\/host>/);
  if (!hostBlock) return { hosts: [] };

  const address = hostBlock[1].match(/<address addr="(.*?)"/)?.[1] ?? 'unknown';

  const portBlocks = [...hostBlock[1].matchAll(/<port protocol=".*?" portid="(\d+)">([\s\S]*?)<\/port>/g)];
  const ports: NmapPort[] = portBlocks.map(([_, port, block]) => {
    const state = /<state state="(.*?)"/.exec(block)?.[1] ?? 'unknown';
    const service = /<service name="(.*?)"/.exec(block)?.[1] ?? 'unknown';
    return {
      port: Number(port),
      state,
      service,
    };
  });

  return {
    hosts: [{ address, ports }],
  };
}
