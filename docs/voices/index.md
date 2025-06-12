# 语音记录

<script setup lang="ts">
import { ref } from 'vue';

const volume = ref(100)

</script>

这里收集了以前保存的语音文件，你可以在这里<curtain>开盲盒</curtain>~~直接听~~。

## 设置音量

<volume-bar v-model="volume">声音大小：</volume-bar>

## 语音内容

<q-window title="我的世界话题群">
    <q-voice name="" avatar="https://q2.qlogo.cn/headimg_dl?dst_uin=2860986565&spec=100" src="/voices/舔狗狗叫.wav" :volume="volume"></q-voice>
    <q-voice name="" avatar="https://q2.qlogo.cn/headimg_dl?dst_uin=3306636756&spec=100" src="/voices/迅猛受介绍.wav" :volume="volume"></q-voice>
    <q-voice name="" avatar="https://q2.qlogo.cn/headimg_dl?dst_uin=2117563201&spec=100" src="/voices/益子叫1.wav" :volume="volume"></q-voice>
    <q-voice name="" avatar="https://q2.qlogo.cn/headimg_dl?dst_uin=2117563201&spec=100" src="/voices/益子叫2.wav" :volume="volume"></q-voice>
    <q-voice name="" avatar="https://q2.qlogo.cn/headimg_dl?dst_uin=1296556133&spec=100" src="/voices/小王八王八叫.wav" :volume="volume"></q-voice>
    <q-voice name="" avatar="https://q2.qlogo.cn/headimg_dl?dst_uin=1296556133&spec=100" src="/voices/小王八早上好.wav" :volume="volume"></q-voice>
    <q-voice name="" avatar="https://q2.qlogo.cn/headimg_dl?dst_uin=1296556133&spec=100" src="/voices/小王八中午好.wav" :volume="volume"></q-voice>
    <q-voice name="" avatar="https://q2.qlogo.cn/headimg_dl?dst_uin=1296556133&spec=100" src="/voices/小王八晚上好.wav" :volume="volume"></q-voice>
    <q-voice name="" avatar="https://q2.qlogo.cn/headimg_dl?dst_uin=1296556133&spec=100" src="/voices/小王八晚安.wav" :volume="volume"></q-voice>

</q-window>


